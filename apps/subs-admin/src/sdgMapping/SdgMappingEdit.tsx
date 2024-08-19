import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";

export const SdgMappingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="goalNumber" source="goalNumber" />
      </SimpleForm>
    </Edit>
  );
};
