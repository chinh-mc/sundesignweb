"use client"

import Loading from "@/components/common/Loading";
import ContactEdit from "@/components/contacts/ContactEdit";
import { useAppContext } from "@/components/provider/AppProvider";
import { STATUS_CONTACT } from "@/lib/config";
import { convertUTCDateToLocalDate } from "@/lib/dateUtils";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowSpacingParams, GridSortItem, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const initColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'fullname',
    headerName: 'Thông tin khách hàng',
    // flex: 1,
    width: 250,
    renderCell(params) {
      return <>
        <Stack>
          <span>{params.row.fullname}</span>
          <span>{params.row.email}</span>
          <span>{params.row.phone}</span>
        </Stack>
      </>
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    // flex: 1,
    hideable: false
  },
  {
    field: 'phone',
    headerName: 'Số điện thoại',
    width: 200,
    // flex: 1,
    hideable: false
  },
  {
    field: 'content',
    headerName: 'Ghi chú',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    renderCell: (params: GridRenderCellParams) => <ExpandableCell {...params} />,
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

function ExpandableCell({ value }: GridRenderCellParams) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {expanded ? value : value.slice(0, 100)}&nbsp;
      {value.length > 100 && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
          type="button"
          component="button"
          sx={{ fontSize: 'inherit' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Rút gọn' : 'Xem thêm..'}
        </Link>
      )}
    </div>
  );
}


const Contacts = () => {
  const router = useRouter();

  // const getRowSpacing = useCallback((params: GridRowSpacingParams) => {
  //   return {
  //     top: params.isFirstVisible ? 0 : 5,
  //     bottom: params.isLastVisible ? 0 : 5,
  //   };
  // }, []);

  const { setLoading } = useAppContext();

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
            columnVisibilityModel={{
              // Hide columns status and traderName, the other columns will remain visible
              phone: false,
              email: false,
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            onRowClick={handleOpenDialogContact}
            // getRowSpacing={getRowSpacing}
            rowSpacingType="border"

            getEstimatedRowHeight={() => 100}
            getRowHeight={() => 'auto'}
            slots={{ toolbar: GridToolbar }}
            sx={{
              '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
                py: 1,
              },
              '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
                py: '15px',
              },
              '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
                py: '22px',
              },
            }}
            getRowClassName={(params) => `row-background--${params.row.status}`}
          />

        </Box>
        <ContactEdit
          open={open}
          contact={selectedContact}
          onClose={handleCloseDialogContact}
          onRefeshData={getData}
        />
        <Stack>
          <p>
            <span className="contact-border-color"></span>
            {STATUS_CONTACT.NEW_CONTACT}
          </p>
          <p>
            <span className="row-background--CONTACTED contact-border-color"></span>
            {STATUS_CONTACT.CONTACTED}
          </p>
          <p>
            <span className="row-background--SUCCESS contact-border-color"></span>
            {STATUS_CONTACT.SUCCESS}
          </p>
          <p>
            <span className="row-background--FAIL contact-border-color"></span>
            {STATUS_CONTACT.FAIL}
          </p>
        </Stack>
      </Container>

    )
  }

}

export default Contacts