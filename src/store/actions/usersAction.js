import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createUsers = createAsyncThunk(
    "createUsers",
    async (usersInfo) => {
        const response = await axios.post(
            `http://api-qa.salesroom.in/v1/users`,
            usersInfo
        );
        return response.data;
    }
);