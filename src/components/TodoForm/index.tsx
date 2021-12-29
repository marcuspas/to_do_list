import { useState } from 'react';
import injectSheet from 'react-jss'
import { styles } from "./styles";
import { TodoFormProps } from './types';

export const TodoForm = injectSheet(styles)(({ classes }: TodoFormProps) => {

    const [input_text, set_input_text] = useState("")

    return (
        <form>
            <div>
                <input
                    value={input_text}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => set_input_text(event.target.value)}
                    type="text"
                    placeholder="What's the plan for today?"
                    className={classes.section}
                    maxLength={20}
                ></input>
                <button className={`${classes.button} ${classes.button_add}`}>
                    New
                </button>
            </div>
        </form>
    )

})