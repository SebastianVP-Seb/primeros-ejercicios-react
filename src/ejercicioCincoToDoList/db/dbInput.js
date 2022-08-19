import { v4 as uuidv4 } from 'uuid';

const INPUTS={
    toDo: {
        id: uuidv4(),
        name: 'toDo',
        placeholder: ' Write a to do...',
        type: 'text',
        complete: 'false',
        value: ''
    },
};

export default INPUTS;