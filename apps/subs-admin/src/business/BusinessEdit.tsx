import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SdgMappingTitle } from "../sdgMapping/SdgMappingTitle";
import { SurveyResponseTitle } from "../surveyResponse/SurveyResponseTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <TextInput label="mission" multiline source="mission" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="sdgMappings"
          reference="SdgMapping"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SdgMappingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="surveyResponses"
          reference="SurveyResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyResponseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
