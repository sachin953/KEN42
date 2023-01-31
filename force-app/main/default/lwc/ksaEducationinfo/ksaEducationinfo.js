import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KSAPersonalInfo extends LightningElement {
    @api educationid;
    @api educationName
    isEditMode = true;
    editclick = true;
    cp = false;

    connectedCallback()
    {
        if(this.educationName==='C and P')
        {
            this.cp = true;
        }
    }

    handleSuccess(event)
    {
        this.isEditMode = true;
        this.editclick = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Educational Qualifications Information Updated',
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