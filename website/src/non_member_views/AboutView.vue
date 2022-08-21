<template>
  <div class="about_container">    
    <div class="who_we_are_container">
      <div>
        <h1 class="who_we_are_header">Who we are</h1>
        <h5 style="color: white; font-family: Poppins; text-align: justify; margin-left: 5%; margin-right: 5%;">{{whoWeAreMessage}}</h5>
      </div>
      <img style="height: 500px; margin: 5%;" src="@/assets/media/teamup.svg">
    </div>

    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 class="join_us_header">Why join us ?</h1>
      <div class="join_us_card_section">
        <JoinUsCard
          :cardTitle="cardTitle[0]"
          :cardDescription="cardDescriptions[0]"
          :iconName="iconNames[0]"
        ></JoinUsCard>
         <JoinUsCard
          :cardTitle="cardTitle[1]"
          :cardDescription="cardDescriptions[1]"
          :iconName="iconNames[1]"
        ></JoinUsCard>
         <JoinUsCard
          :cardTitle="cardTitle[2]"
          :cardDescription="cardDescriptions[2]"
          :iconName="iconNames[2]"
        ></JoinUsCard>
      </div>
      <div class="join_us_card_section">
         <JoinUsCard
          :cardTitle="cardTitle[3]"
          :cardDescription="cardDescriptions[3]"
          :iconName="iconNames[3]"
        ></JoinUsCard>
         <JoinUsCard
          :cardTitle="cardTitle[4]"
          :cardDescription="cardDescriptions[4]"
          :iconName="iconNames[4]"
        ></JoinUsCard>
         <JoinUsCard
          :cardTitle="cardTitle[5]"
          :cardDescription="cardDescriptions[5]"
          :iconName="iconNames[5]"
        ></JoinUsCard>
      </div>
    </div>

    <div class="join_discord_container">
      <div style="margin: 5%; padding: 10px;">
        <img style="height: 100%;" src="@/assets/media/joincommunity.svg">
      </div>
      <div style="margin: 5%">
        <h1 class="join_discord_header">Join our community!</h1>
        <h5 style="color: white; font-family: Poppins; text-align: justify; margin-bottom: 30px;">{{joinDiscord}}</h5> 
        <a class="join_now_button" href="https://discord.gg/3daSHa7">Join now!</a>
      </div>

    </div>

    <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center">
      <h1 class="members_header">Meet our team</h1>
      <div class="member_card_section">
        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/asfandyar.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[0]}}</h3>
              <p>{{memberRole[0]}}</p>
              <p>{{memberMajor[0]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[0]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="0" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>

        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/diako.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[1]}}</h3>
              <p>{{memberRole[1]}}</p>
              <p>{{memberMajor[1]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[1]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="1" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>

        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/Loc.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[2]}}</h3>
              <p>{{memberRole[2]}}</p>
              <p>{{memberMajor[2]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[2]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="2" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>
      </div>

      <div class="member_card_section">
        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/yusef.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[3]}}</h3>
              <p>{{memberRole[3]}}</p>
              <p>{{memberMajor[2]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[3]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="3" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>

        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/marom.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[4]}}</h3>
              <p>{{memberRole[4]}}</p>
              <p>{{memberMajor[2]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[4]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="4" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>
      </div>

      <div class="member_card_section">
                <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/Prad.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[5]}}</h3>
              <p>{{memberRole[5]}}</p>
              <p>{{memberMajor[1]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[5]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="5" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>

        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/tanishq.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[6]}}</h3>
              <p>{{memberRole[6]}}</p>
              <p>{{memberMajor[2]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[6]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="6" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>

        <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img src="@/assets/media/kati.jpg">
        </div>
          <div class="lower_half">
              <h3>{{memberName[7]}}</h3>
              <p>{{memberRole[7]}}</p>
              <p>{{memberMajor[2]}}</p>  
            
              <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="memberLinkedIn[7]" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord($event)" v-bind:id="7" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
              </div>

              <a class="view_more_button">View More</a>
          </div>
        </div>
      </div>

    </div>

    <div class="contact_information_container">
      <h1 class="members_header">Contact us!</h1>
      <h5 style="color: white; font-family: Poppins; text-align: center; margin-left: 5%; margin-right: 5%;">For any business inquiries or other questions, please don't be hesistant to reach us through these following platforms</h5>
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <p class="contact_info_links"><i style="margin-right: 5px; color: red;" class="fa fa-envelope"></i>Gmail: info@breakthealgo.com</p>
        <p class="contact_info_links"><i style="margin-right: 5px; padding: 1px; background: #d6249f;background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);border-radius: 25%;" class="fab fa-instagram"></i>Instagram: @breakthealgo</p>
        <p class="contact_info_links"><i style="margin-right: 5px; color: #1195F5;" class="fab fa-facebook"></i>Facebook: @breakthealgo</p>
        <p class="contact_info_links"><i style="margin-right: 5px; color: #1D9BF0;" class="fab fa-twitter"></i>Twitter: @breakthealgo</p>
        <p class="contact_info_links"><i style="margin-right: 5px; color: #0A66C2;" class="fab fa-linkedin"></i>Linkedin: Break The Algo</p>
      </div>
      
    </div>

  </div>
</template>

<script>
import JoinUsCard from '@/components/about_view_components/JoinUsCard.vue';
export default {
  components: {
    JoinUsCard,
},
  data() {
    return {
      memberImage: [0, 1, 2, 3, 4,],
      memberName: ["Asfanyar Azhar", "Diako Mazneh", "Loc Pham", "Yusef Ahmed", "Marom Sverdlov", "Pradyut Nair", "Tanishq Virwani", "Kati Overbeeke"],
      memberRole: ["Founder/ Board member", "Board member", "Board member", "Interview Committee", "Interview Committee", "Project Committee", "External Relations Committee", "Activity Committee"],
      memberMajor: ["Data Science Student","Data Science Student", "Computer Science Student"],
      memberLinkedIn: ["https://www.linkedin.com/in/asfandyarazhar/", 
                      "https://www.linkedin.com/in/diakomazneh/", 
                      "https://www.linkedin.com/in/loc-duc-pham/",
                      "https://www.linkedin.com/in/yusef-ahmed-417333223/",
                      "",
                      "https://www.linkedin.com/in/pradyut-nair-b5b7071ba/", 
                      "https://www.linkedin.com/in/tanishq-virwani-092bb11ba/",
                      "https://www.linkedin.com/in/kati-overbeeke/"],
      memberDiscord: ["Asfandyar_Azhar#2675", "MultiDiako#1999", "Chaotic_Spongebob#9101", "BronzeSlayer#9787", "magical#2355", "Geeky#2285", "tanishqv#9830", "kati.ov#9929"],

      iconNames: ["fa fa-comment", "fa fa-ribbon", "fa fa-user", "fa fa-laptop-code", "fa fa-lightbulb", "fa fa-calendar"],
      cardTitle: ['Community', 'Job Application Help', 'Mock interviews', 'Daily practice', 'Projects', 'Events'],
      cardDescriptions: [
        "Find like minded people through an excellent support network full of many types of students at TU/e, including internationals, bachelors, masters, PhDs, etc.", 
        "Don’t know how to get your dream tech job? Ask our community to guide you through the process and receive advice on CVs, cover letters, LinkedIn, referrals, and more!",
        "Practice makes perfect! Be prepared and relax for your next technical interview by practicing with our welcoming community.",
        "Keep your skills sharp by checking out our daily programming problem! These questions mirror what is asked during a technical interview at a Big-N company.",
        "Join our weekly project club where we work together or separately on similar projects and assist each other. It is a great way to build your CV, gather more experience, and meet some new friends!",
        "Partake in one of our several events throughout the year where you can get exposure directly from Big-N companies. Be sure to look forward to our workshops, guest speakers, and more ambitious events to come soon!"                    
      ],
      whoWeAreMessage: 
      "Break The Algo is a student-led career association whose goal is to establish the necessary foundation for students to get internships in (Big-tech) companies. We seek to bring students a holistic career-based education complementary to your studies at the university, as we want to set-up our future computer science and data science graduates for an advantageous head start in the industry.",
      joinDiscord: 
      "A discord server was created as a medium for all the members in the BTA community to chat, discuss and collaborate with each others and with the committee/ board members themselves. Joining our discord is a great way for you to expand your network with like-minded students and acquire new knowledge through other members in the BTA, so we urge you to do so!"
    }
  },
  methods: {
    displayDiscord(event) {
      var discord = this.memberDiscord[parseInt(event.currentTarget.id)]
      var name = this.memberName[parseInt(event.currentTarget.id)]

      alert(name + " discord username is: " + discord)
    }
  }
}
</script>

<style>
.about_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5%;
  margin-bottom: 100px;
}

.who_we_are_container {
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
}

h1.who_we_are_header {
  color: white; 
  font-family: Poppins; 
  font-size: 65px; 
  text-align: justify; 
  margin-left: 5%;
}

h1.join_us_header {
  color: white; 
  font-family: Poppins; 
  font-size: 65px; 
  text-align: center;
}
 
.join_us_card_section {
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;
}

.join_discord_container {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  width: 100%;
}

h1.join_discord_header {
  color: white; 
  font-family: Poppins; 
  font-size: 65px; 
  text-align: left;
}

a.join_now_button {
  padding: 10px 20px;
  text-decoration: none;
  font-family: Poppins;
  border-radius: 10px;
  color: white;
  background-color: red;
}

a.join_now_button:hover {
  background-color: darkred;
  color: white;
}

h1.members_header {
  color: white; 
  font-family: Poppins; 
  font-size: 80px; 
  text-align: center;
}

.member_card_section {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  flex-wrap: wrap;
  align-items: center; 
}

.card_parent_container {
    width: 300px;
    margin: 20px;
    height: fit-content;
    margin-bottom: 90px;
    display: flex;
    background-color:#2E2E2F;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card_parent_container .upper_half {
    width: 100%;
    z-index: 1;
    background: rgb(2,0,36);
    background: linear-gradient(305deg, rgba(2,0,36,1) 0%, rgba(193,35,21,1) 100%, rgba(0,212,255,1) 100%);    
}

.card_parent_container .upper_half img {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    transform: translateY(30%);
    z-index: 1;
}

.card_parent_container .lower_half {
    height: fit-content;
    width: 100%;
    padding-bottom: 25px;
    background-color:#2E2E2F;
    transform: translateY(35%);
}

.card_parent_container .lower_half h3 {
    color: white;
    font-family: Poppins;
    margin: 10px 0px 2.5px 0px;
}


.card_parent_container .lower_half p {
    color: white;
    font-family: Poppins;
    margin: 0;
}

a.view_more_button {
    color: white;
    font-size: 16px;
    font-family: Poppins;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: red;
}

a.view_more_button:hover {
    cursor: pointer;
    color: white;
    background-color: darkred;
}

p.contact_info_links {
  color: white;
  text-decoration: none;
  font-family: Poppins;
  font-size: 24px;
  text-align: left;
  width: 40%;
  margin-left: 7.5%;
}

@media screen and (max-width: 1026px) {
    .who_we_are_container {
      flex-direction: column;
    }

    .join_discord_container {
      flex-direction: column-reverse;
    }

    .join_discord_container img {
      width: 80%;
    }
}


@media screen and (max-width: 700px) {
    h1.join_us_header {
      font-size: 48px;
    }
    .join_us_card_section {
        flex-direction: column;   
    }

    h1.join_discord_header {
      font-size: 48px;
    }

    h1.members_header {
      font-size: 48px;
    }
    .member_card_section {
      flex-direction: column;
    }

    .card_parent_container {
      width: 75%;
      margin-bottom: 120px;
    }

    .card_parent_container .lower_half {
      transform: translateY(35%);
    }

    .card_parent_container .lower_half h3 {
      font-size: 48px;
      margin: 0;
      margin-bottom: 10px;
    }

    p.contact_info_links {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
}
</style>
