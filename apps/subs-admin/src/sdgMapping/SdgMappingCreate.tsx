import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";

export const SdgMappingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
