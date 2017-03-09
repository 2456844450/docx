import {XmlComponent} from "../../../docx/xml-components";

interface ILatentStyleExceptionAttributesProperties {
    name?: string;
    uiPriority?: string;
    qFormat?: string;
    semiHidden?: string;
    unhideWhenUsed?: string;
}

export class LatentStyleExceptionAttributes extends XmlComponent {
    private _attr: ILatentStyleExceptionAttributesProperties;

    private xmlKeys = {
        name: "w:name",
        uiPriority: "w:uiPriority",
        qFormat: "w:qFormat",
        semiHidden: "w:semiHidden",
        unhideWhenUsed: "w:unhideWhenUsed",
    };

    constructor(properties?: ILatentStyleExceptionAttributesProperties) {
        super("_attr");
        this._attr = properties;

        if (!properties) {
            this._attr = {};
        }
        //this._attr.xmlKeys = this.xmlKeys;
    }
}
