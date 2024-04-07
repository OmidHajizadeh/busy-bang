import FormControl from "@mui/material/FormControl";
import { NativeSelect } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export default function SelectBox({ langs }: { langs: string[] }) {
  return (
    <div className="flex items-center gap-3">
      <TranslateIcon />
      <FormControl sx={{ width: 100, border: "none", color: "#fff" }}>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "language",
          }}
        >
          {langs.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
