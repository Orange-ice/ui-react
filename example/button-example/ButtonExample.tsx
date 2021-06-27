import React from 'react';
import { Button } from '../../lib';
const ButtonExample: React.FC = () => {
    return (
        <div>
            <Button>Default</Button>
            <Button effect="primary">Primary</Button>
            <Button variant="ghost" effect="primary">Ghost</Button>
            <Button variant="outline" effect="primary">Outline</Button>
            <Button effect="primary" disabled>Disable</Button>
        </div>
    )
}

export default ButtonExample
