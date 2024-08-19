import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SdgMappingTitle } from "../sdgMapping/SdgMappingTitle";
import { SurveyResponseTitle } from "../surveyResponse/SurveyResponseTitle";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
