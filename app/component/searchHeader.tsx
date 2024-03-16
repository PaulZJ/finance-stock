import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

export default function SearchHeader({placeholder}: {placeholder: string}) {
    return (
        <div className="h-16 bg-slate-100 py-2 flex justify-center">
          <div className="h-10 w-1/3 border-solid border-2 border-gray-300 flex items-center">
              <div className="w-full pl-3">
                <InputBase
                  placeholder={placeholder}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className="w-10 ">
                <SearchIcon sx={{ color: grey[800]}}/>
              </div>
          </div>
        </div>
    )
}