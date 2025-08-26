import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react";

function TableView({ DataSchema, data, selectedRows, handleSelectionChange, checkboxSelection = false, orderBy, isLoading=false}) {
    
    const visibilityModel = {}
    const columns = DataSchema.map(ele => {

        visibilityModel[ele["name"]] = !ele["hideInTable"]

        return {field: ele["name"], headerName: ele["label"], flex: 1, align: "center"}
    });
    const rows = data

  return (
    <DataGrid
        sx={{height: "100%", overflow: "hidden"}}
        className="hide-select-all"
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
            sorting: {
              sortModel: [{ field: orderBy, sort: 'desc' }],
            },
          }}
        loading={isLoading}
        columnVisibilityModel={visibilityModel}
        {...(checkboxSelection && {
            checkboxSelection: true,
            onRowSelectionModelChange: handleSelectionChange,
            rowSelectionModel: selectedRows
        })}
    />

    )
}

export default TableView