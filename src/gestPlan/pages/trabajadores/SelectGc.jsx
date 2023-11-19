import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React from 'react'
import { planesAPI } from '../../../API/planesAPI';


const cargaCategorias = async (gc) => {
    try {
        const plan = localStorage.getItem("idPlan");
        const respuesta = await planesAPI.get(`/categorias/${plan}/${gc}`)

    } catch (error) {

    }
}

export const SelectGc = (props) => {
    const {
        values: { },
        setFieldValue,
    } = useFormikContext();
    const [field, meta] = useField(props);

    useEffect(() => {
        let isCurrent = true;
        // your business logic around when to fetch goes here.
        if (gc.trim() !== '') {
            cargaCategorias.then(({ data }) => {
                if (!!isCurrent) {
                    // prevent setting old values
                    setFieldValue(props.name, data.payload);
                }
            });
        }
        return () => {
            isCurrent = false;
        };
    }, [gc, setFieldValue, props.name]);

    return (
        <>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="labelCategoria">Categoría</InputLabel>
                <Select {...props} {...field}

                >
                    <MenuItem key="----" value="----" >----n</MenuItem>

                </Select>
            </FormControl>
            {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
        </>
    );
}
