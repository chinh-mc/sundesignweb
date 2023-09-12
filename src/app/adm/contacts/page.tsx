"use client"

import SkeletonColumn from "@/components/skeleton/SkeletonColumn";
import useResponsive from "@/hooks/useResponsive";
import { STATUS_CONTACT, URL_WEBSITE } from "@/lib/config";
import { convertUTCDateToLocalDate } from "@/lib/dateUtils";
import { Typography } from "@mui/material";
import { Box, Container, Stack, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, GridSortItem } from '@mui/x-data-grid';
import { useContext, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import ContactEdit from "@/components/contacts/ContactEdit";
import { useAppContext } from "@/components/provider/AppProvider";

const initColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'fullname',
    headerName: 'Tên khách hàng',
    // flex: 1,
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    // flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Số điện thoại',
    width: 200,
    // flex: 1,
  },
  {
    field: 'content',
    headerName: 'Ghi chú',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 230,
    valueGetter: (params: GridValueGetterParams) => {
      const data = params.row.status;
      let result = ""
      switch (data) {
        case "NEW_CONTACT":
          result = STATUS_CONTACT.NEW_CONTACT
          break;
        case "CONTACTED":
          result = STATUS_CONTACT.CONTACTED
          break;
        case "SUCCESS":
          result = STATUS_CONTACT.SUCCESS
          break;
        case "FAIL":
          result = STATUS_CONTACT.FAIL
          break;
        default:
          result = STATUS_CONTACT.NEW_CONTACT
          break;
      }
      return result
    }

  },
  {
    field: 'createdAt',
    headerName: 'Ngày tạo',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${convertUTCDateToLocalDate(params.row.createdAt)}`,
  },
];


const Contacts = () => {
  const router = useRouter();

  const {setLoading} = useAppContext();

  const session = useSession();

  const [open, setOpen] = useState(false)

  const [selectedContact, setSelectedContact] = useState(undefined)

  const [rows, setRows] = useState([])

  const [columns, setColumns] = useState<GridColDef[]>(initColumns)
  
  const [sortModel, setSortModel] = useState<GridSortItem[]>([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]);

  async function getData() {
    setLoading && setLoading(true)
    const res = await fetch('/api/posts', {
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    setRows(await res.json())
    setLoading && setLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenDialogContact = (data: any) => {
    const { row } = data
    setSelectedContact(row)
    setOpen(true)
  }

  const handleCloseDialogContact = () => {
    setOpen(false)
    setSelectedContact(undefined)
  }


  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/adm/login");
    // return <Loading />;
  }

  if (session.status === "authenticated") {
    return (
      <Container sx={{ paddingBottom: 5, paddingTop: 5 }}>
        <Stack justifyContent={"space-between"} direction={"row"} paddingBottom={2}>
          <Typography variant='h5' sx={{ fontWeight: 600 }}>DANH SÁCH LIÊN HỆ</Typography>
          {session.status === "authenticated" && (
            <Button variant="contained" type="button" className="btn btn-common" onClick={signOut as any}>
              Logout
            </Button>
          )}
        </Stack>

        <Box sx={{ minHeight: 200, height: 600, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            onRowClick={handleOpenDialogContact}
          />

        </Box>
        <ContactEdit
          open={open}
          contact={selectedContact}
          onClose={handleCloseDialogContact}
          onRefeshData={getData}
        />
      </Container>

    )
  }

}

export default Contacts