import { Request } from 'express';

export class Utils {
  public static generateDataValues(model: any, req: Request): any {
    const modelInstance = new model();
    const tmpDate = new Date();

    Object.keys(modelInstance.dataValues).forEach((keyname) => {
      if (req.body[keyname])
        modelInstance.setDataValue(keyname, req.body[keyname]);
    });

    modelInstance.created_at = tmpDate;
    modelInstance.updated_at = tmpDate;

    return modelInstance.dataValues;
  }
}
