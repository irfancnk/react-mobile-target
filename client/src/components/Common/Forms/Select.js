//
import './Select.css';

const Select = ({ children }) => {
    return (
        <div className="select">
            <select name="slct" id="slct">
                {children}
            </select>
        </div>
    );
}

export default Select;
