import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from "../redux/store";
import { searchProductThunk } from "../redux/reducers/product/thunk";
import { actions } from "../redux/reducers/product/";
import { IRootState } from "../redux/reducers";

export default function SearchBar() {
    const dispatch = useDispatch<AppDispatch>();

    const { search } = useSelector((a: IRootState) => a.product)

    function onSearch(e: FormEvent) {
        e.preventDefault();
        dispatch(searchProductThunk({ payload: { search } }));
        dispatch(actions.handleSearch({ payload: { search } }));
        window.location.replace(window.location.origin + '/?search=' + search)
    }

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.handleSearch({ payload: { search: e.target.value } }));

    return (
        <Paper component="form" onSubmit={onSearch} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '60%', mx: 5, borderRadius: 10 }}>
            <IconButton type="button" onClick={onSearch} sx={{ p: '10px' }} >
                <SearchIcon />
            </IconButton>
            <InputBase value={search} onChange={onChangeSearch} sx={{ ml: 0.5, flex: 1 }} placeholder="¿Qué estás buscando?" />
        </Paper>
    )
}