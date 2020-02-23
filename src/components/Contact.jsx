import React from "react";

function Contact(){
return (
<div class="container">
<div class="contact">
    <div class="form-area">  
        <form role="form">
        <br/>
                    <h3 className="contact">Contact Form</h3>
    				<div class="form-group">
						<input type="text" class="form-control" id="name" name="name" placeholder="Name" required/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="email" name="email" placeholder="Email" required/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required/>
					</div>
                    <div class="form-group">
                    <textarea class="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                                       
                    </div>
            
        <button type="button" id="submit" name="submit" class="btn btn-dark pull-right">Submit Form</button>
        </form>
    </div>
</div>
</div>
);

}

export default Contact;