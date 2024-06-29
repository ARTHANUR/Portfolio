import React from "react";

const FormModule = ({toggle , setToggle}) => {
    return (
        <div className="form-module">
            <form action="https://formsubmit.co/sarthanur@gmail.com" method="POST">
                <span onClick={()=>setToggle(!toggle)}>X</span>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="E-mail" placeholder="Your Email" />
                <input type="text" name="Message" placeholder="Write Something 😄" />
                <button type="submit">
                    Send <span class="material-symbols-outlined">send</span>
                </button>
            </form>
        </div>
    );
};

export default FormModule;
