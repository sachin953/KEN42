import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KSAPersonalInfo extends LightningElement {
    @api courseId;
    isEditMode = true;
    editclick = true;

    handleSuccess(event)
    {
        this.isEditMode = true;
        this.editclick = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Course Completion Documents Information Updated',
            variant: 'success',
        });
        this.dispatchEvent(evt); 
    }
    onEdit(event)
    {
        console.log(this.courseId);
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