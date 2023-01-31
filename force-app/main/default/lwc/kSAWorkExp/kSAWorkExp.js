import { LightningElement,api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KSAPersonalInfo extends LightningElement {
    @api workId;
    isEditMode = true;
    editclick = true;

    handleSuccess(event)
    {
        this.isEditMode = true;
        this.editclick = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Work Expirence and Activites Information Updated',
            variant: 'success',
        });
        this.dispatchEvent(evt);    
    }
    onEdit(event)
    {
        console.log('Contact ID',this.contactId,'App Id',this.applid);
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