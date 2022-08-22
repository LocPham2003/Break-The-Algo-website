<template>
    <div>
        <h1 style="font-family: Poppins; margin-top: 2.5%; font-size: 64px;">Support us!</h1>
        <div class="selector_container">
        <a :class="selector1" id="0" @click="onClick($event)">For students</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a :class="selector2" id="1" @click="onClick($event)">For companies</a> 
    </div>
    
    <div class="student_support_section" v-if="selectedTarget == 0">\
        <div class="student_support_image">
            <img style="width: 100%; height: 100%;" src="@/assets/media/appreciation.svg">
        </div>
        <div class="student_support_content">
            <p>For now, we do not have any merchandises or products to be purchased via monetary means, so to support, you can introduce us to other students in TU/e or other university in the Netherlands, we would greatly appreciate it!</p>
            <br>
            <p>You can also reach out to one of our board members via discord to request to be contributed in our open source projects such as the Leetcode problems scraping bot or BTA's full-stack website. Any contributions will be acknowledged by us and it's a great opportunity to add more experience to your CV :D.</p>

            <p>We are also looking for committee members and volunteers to help us in our events or managing the BTA. 
            If you greatly believe and support BTA's goals and visions, you can also sign up to become a board member for the upcoming academic year.</p>

            <br>

            <p>The form for signing up as committee members, volunteers and board members can be found <a href="https://docs.google.com/forms/d/1dacpxUuVk98_JSa_6OZ-zFwxlYwo5YL3F7wQwzt06T4/edit?usp=sharing">here</a></p> 

            <p>Looking forward to seeing your active contributions for the BTA!</p>
        </div>
       
    </div>

    <div class="company_support_section" v-if="selectedTarget == 1">
        <div class="company_support_content">
            <p>We believe that companies could also benefit from our community of talented, industrious and studious students. 
            Hence, we openly welcome companies that reach out to us to host talks, networking events or technical seminars. 
            <br>
            <br>
            If you are a representative of a company that is looking for skillful and knowledgeable (under)graduate students for your internships and open positions, or to simply
            introduce the company's visions and culture for to engage future employees to your business, please do not hesistate to schedule an event with us! 
            </p>

            <p>Moreover, if you believe in our goals and visions, you can support us financial via a sponsorship or donation. Any sponsorships or donations will be featured on our website, and we will 
            actively look for the sponsor's open employment and introduce it to our community!
            </p>

            <br>

            <p>Are you interested in collaborating with us ? Click <a href="#">here</a> to send us your idea or send an email to info@breakthealgo.com! We are looking forward to hearing from you :)</p>
        </div>
        
        <div class="company_support_image">
            <img style="width: 100%; height: 100%;" src="@/assets/media/connection.svg">
        </div>
    </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTarget: 0,
            selector1 : 'selected',
            selector2 : 'unselected',
        }
    },
    methods : {
        onClick(event) {
            this.selectedTarget = parseInt(event.currentTarget.id)
            if (parseInt(event.currentTarget.id) == 0) {
                this.selector1 = 'selected';
                this.selector2 = 'unselected';
            } else {
                this.selector2 = 'selected';
                this.selector1 = 'unselected';
            }
        }
    }
}
</script>

<style>
.selector_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.selector_container a.selected {
    color: white;
    background-color: #2E2E2F;
    padding: 5px;
    text-decoration: none;
    margin: 10px;
    font-size: 32px;
    font-family: Poppins;
}

.selector_container a.unselected {
    color: white;
    text-decoration: none;
    padding: 5px;
    margin: 10px;
    font-size: 32px;
    font-family: Poppins;
}

.selector_container a.selected:hover {
    cursor: pointer;
}

.selector_container a.unselected:hover {
    cursor: pointer;
}

.student_support_section {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.student_support_content {
    width: 60%;
}

.student_support_image {
    width: 40%;
    margin: 10px;
}

.student_support_section p{
    color: white;
    font-family: Poppins;
    font-size: 18px;
    text-align: left;
}

.student_support_section a {
    color: white;
    font-family: Poppins;
}


.student_support_section a:hover {
    color: red;
}

.company_support_section {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.company_support_section p{
    color: white;
    font-family: Poppins;
    font-size: 18px;
    text-align: left;
}

.company_support_content {
    margin: 10px; 
    width: 60%;
}

.company_support_image {
    margin: 10px;
    width: 40%;
}

.company_support_section a {
    color: white;
    font-family: Poppins;
}


.company_support_section a:hover {
    color: red;
}

@media screen and (max-width: 1026px) {
    .company_support_section {
        flex-direction: column;
    }

    .company_support_content {
        width: 95%;    
    }

    .company_support_image {
        width: 80%;
    }

    .student_support_section{
        flex-direction: column-reverse;
    }

    .student_support_content {
        width: 95%;
    }

    .student_support_image {
        width: 80%;
    }
}


</style>


