import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KSAcetificate extends LightningElement {
  @api certificateid;  
  isEditMode = true;
    editclick = true;

    handleSuccess(event)
    {
        this.isEditMode = true;
        this.editclick = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Certification and Awards Information Updated',
            variant: 'success',
        });
        this.dispatchEvent(evt); 
    }
    onEdit(event)
    {
        if(this.editclick === true)
        {
            this.isEditMode = false;
            this.editclick = false;
        }
    }

    handleCancel()
    {
        this.isEditMode = true;
        this.editclick = true;
    }
}