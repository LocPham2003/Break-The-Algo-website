<template>
    <div>
        <h1 style="font-family: Poppins; margin-top: 2.5%; font-size: 64px;">Our community</h1>
        <div class="selector_container">
        <a :class="selector1" id="0" @click="onClick($event)">Our students</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a :class="selector2" id="1" @click="onClick($event)">Our Partners</a> 
        </div>

        <div class="student_community_section" v-if="selectedTarget === 0">
        <div class="student_community_header">
            <div class="student_community_image">
            <img style="max-width: 100%; max-height: 100%;" src="@/assets/media/outstandingmember.svg">
            </div>
            <div class="student_community_content">
                <h5 style="font-family: Poppins; color: white; text-align: left; margin: 10px;">The list of notable and outstanding students in the BTA can be found here! Each students are selected via nominations, which are made by other students and employees within the BreakTheAlgo community. Each nominated students have their CV, achievements and records 
            available here in this section of the website. Dive in and see what our students are capable of!
                </h5>
            </div>
        </div>
        
        <h1 style="font-family: Poppins; margin-bottom: 2.5%; font-size: 64px; display: block;">Featured Students</h1>
                
        <div class="nominations_display">
            <div class="nomination_container" v-for="nomination in nominations">
                <NominatedStudentView
                    :image="nomination.image"
                    :nominee="nomination.nominee"
                    :studyMajor="nomination.studyMajor"
                    :description="nomination.description"
                    :discord="nomination.discord"
                    :linkedin="nomination.linkedin"
                    :cvLink="nomination.cvLink"
                >

                </NominatedStudentView>
                    
            </div>
        </div>

        <div class="blog_display">

        </div>

        </div>

        <div class="partnership_community_section" v-if="selectedTarget === 1">
            <div class="partnership_community_header">
                <div class="partnership_community_content">
                    <h5 style="font-family: Poppins; color: white; text-align: left; margin: 10px;">
                    We value the support and partnership of educational institutions, companies and organizations, so we want to show our appreciation by feature those who are partner or sponsors of BTA in here!
                    <br>
                    <br>
                    Right now, we do not have any sponsors or partner as BTA is a young organization. Founded in 2020, amidst the COVID-19 pandemic, we have put a lot of effort into creating virtual events and host workshops that keep students' morale high and continously encourage them to innovate despite the difficulties.
                    <br>
                    <br>
                    Therefore, you can be the first sponsor/ partner collaborate with us! Any contributions, regardless of the volume, will be featured in this section of our website. Please navigate to the <a @click="goToSupport" style="text-decoration: underline;">Support</a> section to get started on how to collaborate with us!
                    </h5>
                </div>

                <div class="partnership_community_image">
                    <img style="width: 100%; height: 100%" src="@/assets/media/sharingknowledge.svg">
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import ImageService from '@/services/ImageService';
import NominationService from '@/services/NominationService';

import NominatedStudentView from '@/components/community_view_components/NominatedStudentView.vue';

export default {
    components: {
    NominatedStudentView
},
    data() {
        return {
            selectedTarget: 0,
            selector1 : 'selected',
            selector2 : 'unselected',
            nominations: [],
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
        }, 
        goToSupport() {
            this.$router.push({name : 'support'})
        }
    },
    beforeMount() {
        const fetchData = async() => {
            await NominationService.getNominations().then(res => {
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].status === "1") {
                        this.nominations.push({
                        code: res.data[i].code,
                        nominee: res.data[i].nominee,
                        cvLink: res.data[i].cvLink,
                        studyMajor: res.data[i].studyMajor,
                        description: res.data[i].description,
                        discord: res.data[i].discord,
                        linkedin: res.data[i].linkedin
                    })
                    }
                    
                }
            }, err => {
                console.log(err)
            })

            for (var i = 0; i < this.nominations.length; i++) {
                    await ImageService.findImageByCode({code : this.nominations[i].code}).then(res => {
                        var image = null
                        if (res.data.image != null) {
                            image = "data:image/png;base64," + res.data.image
                        }
                        this.nominations[i]["image"] = image
                    }, err => {
                        console.log(err)
                    })
            }
        }

        fetchData()
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

.student_community_section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.student_community_header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.student_community_image {
    width: 40%;
}

.student_community_content {
    width: 60%;
}

.partnership_community_section {
    min-height: 100vh;
}

.partnership_community_header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.partnership_community_content {
    width: 60%;
}

.partnership_community_image {
    width: 40%;
}

.nominations_display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-bottom: 100px;
}

@media screen and (max-width: 1026px) {
    .student_community_header {
        flex-direction: column-reverse;
    }

    .student_community_image img {
        width: 90%;
        height: 90%;
    }

    .student_community_content {
        width: 80%;
    }

    .nominations_display {
        width: 90%;
        
    }

    .nomination_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .partnership_community_header {
        flex-direction: column;
    }

    .partnership_community_image img {
        width: 90%;
        height: 90%;
    }

    .partnership_community_content {
        width: 80%;
    }


}


</style>