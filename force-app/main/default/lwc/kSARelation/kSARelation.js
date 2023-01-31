import { LightningElement,track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class KSARelation extends LightningElement {
    @api relationId;
    @api relationContactId;
    @api contactId;
    editRelationClick = true;
    relationInput = true;
    editNameClick = true;
    nameInput = true;

    handleRelationSuccess(event)
    {
        this.editRelationClick = true;
        this.relationInput = true;
        let evt = new ShowToastEvent({
            title: 'Data Saved',
            message: 'Family Information Information Updated',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
    onRelationEditMethod(event)
    {
        if(this.editRelationClick === true)
        {
            this.relationInput = false;
            this.editRelationClick = false;
        }
    }
    handleRelationCancel()
    {
        this.editRelationClick = true;
        this.relationInput = true;
    }

    handleNameSuccess()
    {
        this.editNameClick = true;
        this.nameInput = true;
    }

    handleNameEdit()
    {
        if(this.editNameClick === true)
        {
            this.nameInput = false;
            this.editNameClick = false;
        }
    }

    handleNameCancel()
    {
        this.editNameClick = true;
        this.nameInput = true;
    }
}