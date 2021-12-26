import {
  Box,
  Typography,
  Divider,
  Theme,
  makeStyles,
  FormControl,
  Button,
} from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import React, { useState } from "react";
import Attribute from "./Attribute";
import { AttributeItemType } from "./AttributeItem.type";
const useStyle = makeStyles((theme: Theme) => ({
  groupTitle: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(2, 0),
  },
}));

type AttributeGroupProps = {
  title: string;
};

export default function AttributeGroup({
  title,
}: AttributeGroupProps): JSX.Element {
  const classes = useStyle();
  const [attributes, setAttributes] = useState<AttributeItemType[]>([]);
  const addNewAttribute = (e: React.MouseEvent) => {
    e.preventDefault();
    setAttributes((prev) => [
      ...prev,
      {
        filterable: true,
        hasPrice: true,
        slug: "color",
        title: "رنگ",
        type: 0,
      },
    ]);
  };
  const renderAttribute = attributes.map(
    (attribute: AttributeItemType, index) => (
      <Attribute key={index} {...attribute} />
    )
  );
  return (
    <Box>
      <Typography className={classes.groupTitle} variant="h6">
        {title}
      </Typography>
      <Divider />
      {renderAttribute}
      <FormControl>
        <Button
          onClick={addNewAttribute}
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<AddBox />}
        >
          اضافه کردن ویژگی جدید
        </Button>
      </FormControl>
    </Box>
  );
}
