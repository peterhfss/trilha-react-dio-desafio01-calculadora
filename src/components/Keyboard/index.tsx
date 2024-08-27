import { Button } from "../Button";

interface IKeyboard{
    onHandleClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
    onHandleCalculate: () => void;
    onHandleClear: () => void;
    onHandlePercentage: () => void;
    onHandleDeleteElement: () => void;
}

export const Keyboard = ({onHandleClick, onHandleCalculate, onHandleClear, onHandlePercentage, onHandleDeleteElement}: IKeyboard) =>{
    return(
        <div className="grid-cols-4 grid-rows-5  h-full">
            <div className="grid grid-rows-5 grid-cols-1 h-full ">
                <div className="grid grid-cols-4">
                    <Button label="C" isRed={false} handleClick={onHandleClear}  />
                    <Button label="<-" isRed={false} handleClick={onHandleDeleteElement}  />
                    <Button label="%" isRed={false} handleClick={onHandlePercentage}  />
                    <Button id='/' label="/" isRed={true} handleClick={onHandleClick}  />
                </div>
                <div className="grid grid-cols-4">
                    <Button id='7' label="7" isRed={false} handleClick={onHandleClick}  />
                    <Button id='8' label="8" isRed={false} handleClick={onHandleClick} />
                    <Button id='9' label="9" isRed={false} handleClick={onHandleClick} />
                    <Button id='*' label="x" isRed={true} handleClick={onHandleClick}  />
                </div>
                <div className="grid grid-cols-4">
                    <Button id='4' label="4" isRed={false} handleClick={onHandleClick} />
                    <Button id='5' label="5" isRed={false} handleClick={onHandleClick} />
                    <Button id='6' label="6" isRed={false} handleClick={onHandleClick} />
                    <Button id='-' label="-" isRed={true}  handleClick={onHandleClick} />
                </div>
                <div className="grid grid-cols-4">
                    <Button id='1' label="1" isRed={false} handleClick={onHandleClick} />
                    <Button id='2' label="2" isRed={false} handleClick={onHandleClick} />
                    <Button id='3' label="3" isRed={false} handleClick={onHandleClick}  />
                    <Button id='+' label="+" isRed={true} handleClick={onHandleClick} />
                </div>
                <div className="grid grid-cols-4">
                    <Button id='00' label="00" isRed={false} handleClick={onHandleClick} />
                    <Button id='0' label="0"  isRed={false} handleClick={onHandleClick} />
                    <Button id=',' label=","  isRed={false} handleClick={onHandleClick} />
                    <Button id='=' label="=" isRed={true} handleClick={onHandleCalculate}  />
                </div>
            </div>
        </div>
    )
}