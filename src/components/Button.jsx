import React from 'react';

function Button({ title, type , btnFunction }) {
    return (
        <div>
            {type == "primary" ?
                <button type="button" onClick={btnFunction} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    {title}
                </button>
                :
                <button type="button" onClick={btnFunction} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-transparent hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                    {title}
                </button>
            }
        </div>
    )
}

export default Button;