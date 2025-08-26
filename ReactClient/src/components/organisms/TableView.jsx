import { DataGrid } from "@mui/x-data-grid"
import CreateGridColumns from "../../utils/CreateGridColumns";
import { useMemo } from "react";

function TableView({ DataSchema, data, selectedRows, handleSelectionChange, checkboxSelection = false, orderBy, isLoading=false}) {
    
  
  const columns = useMemo(() => CreateGridColumns(DataSchema), [DataSchema])
  const rows = data;

  const visibilityModel = useMemo(() => {
    const model = {};
    
    DataSchema.forEach(ele => {
      model[ele.name] = !ele.hideInTable;
    });

    return model
  
  }, [DataSchema]);



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