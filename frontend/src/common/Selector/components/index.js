import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import { TAG_VALUES, TAG_TYPES } from "modules/feed/constants";
import styles from "./styles";

const SelectorComponent = ({ classes, selectorOnChange, values, label }) => {
  return (
    <div className={classes.selector}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <Select
        multiple
        value={values}
        onChange={selectorOnChange}
        input={<Input />}
        className={classes.formControl}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              width: 200,
            },
          },
        }}
      >
        {TAG_VALUES.map((tag) => (
          <MenuItem key={tag} value={tag}>
            {TAG_TYPES[tag].label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default withStyles(styles)(SelectorComponent);
