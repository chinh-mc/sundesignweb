"use client"

import SkeletonColumn from "@/components/skeleton/SkeletonColumn";
import useResponsive from "@/hooks/useResponsive";
import { URL_WEBSITE } from "@/lib/config";
import { convertUTCDateToLocalDate } from "@/lib/dateUtils";
import { Typography } from "@mui/material";
import { Box, Container, Stack, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, GridSortItem } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";

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
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.status == 0 ? "Liên hệ mới": (params.row.status == 1 ? "Đã liên lạc" : "Chốt deal")}`,
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
  const session = useSession();
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState<GridColDef[]>(initColumns)
  const [sortModel, setSortModel] = useState<GridSortItem[]>([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${URL_WEBSITE}/api/posts`, {
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      setRows(await res.json())
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/adm/login");
    return <Loading />;
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
          />

        </Box>
      </Container>

    )
  }

}

export default Contacts