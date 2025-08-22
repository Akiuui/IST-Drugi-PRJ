import { DataGrid } from "@mui/x-data-grid"

function TableView({DataSchema, data, selectedRows, handleSelectionChange, checkboxSelection = false, orderBy}) {
    
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
        getRowId={(row) => row.id}
        initialState={{
            sorting: {
              sortModel: [{ field: orderBy, sort: 'desc' }],
            },
          }}
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