import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KsaCareer extends LightningElement {
    @api careerid;
    isEditMode = true;
    editclick = true;

    handleSuccess(event)
    {
        this.isEditMode = true;
        this.editclick = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Career Goles and Expectation Information Updated',
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