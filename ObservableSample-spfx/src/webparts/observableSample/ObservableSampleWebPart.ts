import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ObservableSampleWebPartStrings';

import 'observable-sample/dist/ObservableSample/bundle.js';

export interface IObservableSampleWebPartProps {
  description: string;
}

export default class ObservableSampleWebPart extends BaseClientSideWebPart<IObservableSampleWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-observable-sample-web-part description="${ this.properties.description }"></app-observable-sample-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
