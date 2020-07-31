import React from "react";

function FormField({ values, onChange, type, name, label }) {
    return (
        <div>
            <label>
              {label}
            <input
                type={type}
                value={values}
                name={name}
                onChange={onChange}
              />
            </label>
          </div>
    )
}

export default FormField;