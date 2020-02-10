<template>
  <div>
    <div class="content_wrap">
      <div class="column column_container col-sm-12">
        <div class="column-inner">
          <div class="wrapper">
            <div class="sc_section margin_top_huge margin_bottom_large">
              <div class="sc_section_inner">
                <h2 class="sc_section_title sc_item_title home_h2">
                  My Experience
                </h2>

                <p>
                  I have experience providing therapeutic services to an array
                  of populations from early childhood to late adulthood,
                  specifically at-risk youth/ juveniles and adult sex offenders.
                  I am grateful for the various settings in which I have had the
                  opportunity to complete my clinical work in and influential
                  and supportive clinical supervisors that have made a positive
                  impact on my personal and professional growth. In addition, I
                  have worked in treatment settings such as an early childhood
                  partial care programs, juvenile correction facilities, adult
                  outpatient clinics, intensive in-home services, out of home
                  treatment settings serving at-risk youth, and specialized sex
                  offender treatment/detention alternative treatment home
                  programs.
                </p>
                <div style="text-align: center;">
                  <a
                    href="#"
                    class="sc_button sc_button_square sc_button_style_filled sc_button_size_small margin_top_small"
                    @click.prevent="showTimeline = !showTimeline"
                    >{{ showTimeline ? "Show less" : "Show more" }}</a
                  >
                </div>

                <Timeline
                  :timeline-items="dataTimeline"
                  :message-when-no-items="messageWhenNoItems"
                  :unique-year="true"
                  order="desc"
                  v-if="showTimeline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";

export default {
  components: {
    Timeline
  },
  data() {
    return {
      messageWhenNoItems: "There arent items",
      dataTimeline: [
        {
          from: new Date(2016, 1),
          title: "Clinical lead supervisor",
          description: `<b>New Jersey Mentor second chance and detention alternative programs</b><br/>Provide weekly individual clinical supervision to three LSW therapists of the northern to central Region of New Jersey team who have a caseload of 8-9 clients.
Responsible for overseeing 35 clients and 7 treatment homes.
Provide continuous support to the supervisees, treatment home parents, and providers providing risk management techniques and crisis interventions.
Facilitate weekly north team staff meetings to address high priorities, case management/ team provider issues, upcoming court hearings, and any discharge or new admissions as well as documentation.
Provide weekly in-home individual, family and group sessions to juvenile sex offenders, and children with sexually reactive behaviors as well as at-risk youth.
Use of various treatment modalities such but not limited to motivational interviewing, CBT, TF-CBT, Behavior modification, and psychotherapy.
Work collaboratively with clinical team as well as other treatment providers to ensure best interventions and services are put in place conducive to each youth’s individual needs.
Facilitate 90 day treatment team meetings and interact with appropriate agencies for resources.
Provide weekly progress notes, treatment plans, assessments and any documentation conducive to client’s progress in regards to legal and court appearances.
Provide on-call services 24/7 every 3-6 months.`
        },
        {
          from: new Date(2016, 11),
          title: "Outpatient Therapist",
          description:
            "<b>Mount carmel guild behavioral health system</b><br/>Providing individual psychotherapy sessions to an at risk adult population in an outpatient clinic setting. I address an adult population whom are experiencing symptoms of addictive behaviors, history of substance abuse, co-ourring disorders, personality disorders, sexual trauma, PTSD, OCD, anxiety and depression."
        },
        {
          from: new Date(2017, 1),
          title: "Jillian Holguin, LCSW -Owner/Psychotherapist/Life Coach",
          description:
            "<b>Yourself First Therapy and Life Coaching, LLC</b><br/>Welcome! This is my private practice outpatient setting in which I provide individual, couple, and family psychotherapy sessions as well as my newest weekly ! DBT GROUP TUESDAY NIGHTS ADDITION! I also provide life coaching and life stress management services on a weekly, bi-weekly, once a month, or 2x/week sessions depending on the client's needs and goals. It can also be as a as needed basis once an intake assessment is complete. I am Accepting new patients and commercial insurances. Please do not hesitate to contact my office at 201-546-2442 or e-mail at jillianh@yourselffirst.org! . Look forward to hearing from you!"
        }
      ],
      showTimeline: false
    };
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  max-width: 100% !important;
}
</style>
