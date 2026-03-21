import "./css/questionsBlock.css"
import Questions from "../cards/Questions"

export default function QuestionsBlock() {

    const reportLink = "https://www.cargill.com/about/annual-report";
    const supplierLink = "https://www.cargill.com/about/sourcing/supplier-diversity";

    return (
        <section className="questions-block">
            <div className="container questions_container">
                <div className="questions-title">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="questions_wrapper">
                    <Questions 
                        question="How do I contact accounts payable/receivable about an invoice?"
                        answer="Accounts payable/receivable is accessible online at cargill.com/suppliercentral. Click on “email us” and fill out the form. You will get an email with a ticket (incident) number from the Accounting Department. You will need this ticket number for any additional inquiries regarding your request."
                    />
                    <Questions 
                        question="How can I find out about doing some hauling and/or provide carrier services for Cargill?"
                        answer="Thank you for your interest in Cargill transportation.  Please call 1-800-835-3119 or visit the CMLS website for truck logistics information."
                    />
                    <Questions 
                        question="Where can I find a copy of the Cargill annual report?"
                        answer={<>
                            Download our <a href={reportLink}>annual report</a> or view other financial information.
                        </>}
                    />
                    <Questions 
                        question="Where can I find information about becoming a diverse supplier for Cargill?"
                        answer={<>Cargill has a Supplier Diversity Initiative. If you are a diverse supplier as defined in this web site and interested in registering as a diverse supplier, please complete the three-step registration process found on at: <a href={supplierLink}>https://www.cargill.com/about/sourcing/supplier-diversity</a></>}
                    />
                    <Questions 
                        question="I'm a student. Who can help me with my research project?"
                        answer="Unfortunately, due to the number of research and information inquiries we receive, we cannot follow up on every request. We encourage you to use our web site as a point of reference in your research. We apologize that we cannot meet your request."
                    />
                    <Questions 
                        question="Where can I find information about scholarships at Cargill?"
                        answer={<>The Cargill Global Scholars Program provides financial support and leadership development opportunity to undergraduate students from around the world. Scholarships will be awarded to talented, high performing students studying in a field relevant to Cargill’s world of food, agriculture and risk management. Learn more at: <a href="https://www.cargillglobalscholars.com/">https://www.cargillglobalscholars.com/</a></>}
                    />
                    <Questions 
                        question="How can I request a new W2?"
                        answer={<>To request a new W2, please contact CIC Plus at 1-800-360-1265 (Cargill company code 224). Callers will need to know their employee ID number. <br />If you need assistance creating/resetting your account or confirming your employee ID number, please contact MyHR at 1-877-366-9696 Monday-Friday 8:00 am - 5:00 pm CST.</>}
                    />
                </div>
            </div>
        </section>
    )
} 