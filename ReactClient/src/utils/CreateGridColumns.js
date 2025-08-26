function CreateGridColumns(DataSchema) {
  
    return DataSchema.map(ele => {

        const column = {
            field: ele.name,
            headerName: ele.label,
            flex: 1,
            align: "center",
        };

        column.renderCell = (params) => {
            
            const instance = params.row;
            let formattedDate

            switch (ele["type"]){
                case "Date":
                    formattedDate = instance.formatDateTime(instance[params.field])
                break
                case "Object":
                //     // console.log(instance)
                //     formattedDate = instance.formatObject(instance[params.field])
                break
            }
            
            return formattedDate;
        
        }

        return column;
  });
};

export default CreateGridColumns