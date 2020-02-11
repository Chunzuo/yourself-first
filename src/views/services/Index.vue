<template>
  <div class="content_wrap">
    <div class>
      <div class>
        <div class="wrapper">
          <div class="margin_top_small">
            <h2 class="sc_services_title sc_item_title home_h2">Services</h2>
            <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_3">
              <div class="column-1_3">
                <div class="text_center">
                  <b>PSYCHOTHERAPY | COUNSELING</b>
                </div>
                <ul class="sc_list sc_list_style_iconed">
                  <li
                    class="sc_list_item odd first"
                    v-for="(service, index) in psychoterapyServices"
                    :key="`psychoterapy-service-${index}`"
                  >
                    <span class="sc_list_icon icon-check71 icon_color2"></span>
                    {{ service }}
                  </li>
                </ul>
              </div>
              <div class="column-1_3">
                <div class="text_center">
                  <b>LIFE COACHING</b>
                </div>
                <ul class="sc_list sc_list_style_iconed">
                  <li
                    class="sc_list_item odd first"
                    v-for="(service, index) in lifeCoachingServices"
                    :key="`lifecoaching-service-${index}`"
                  >
                    <span class="sc_list_icon icon-check71 icon_color2"></span>
                    {{ service }}
                  </li>
                </ul>
              </div>
              <div class="column-1_3">
                <div class="text_center">
                  <b>PRIVATE PRACTICE | CLINICAL CONSULTATION</b>
                </div>
                <ul class="sc_list sc_list_style_iconed">
                  <li
                    class="sc_list_item odd first"
                    v-for="(service, index) in privateServices"
                    :key="`private-service-${index}`"
                  >
                    <span class="sc_list_icon icon-check71 icon_color2"></span>
                    {{ service }}
                  </li>
                </ul>
              </div>
              <blockquote class="sc_quote">
                <p>
                  In addition, I offer 24/7 support only for life coach and stress
                  management clients. I am accepting new patients and commercial
                  insurance. Life coaching services are out of pocket and I believe
                  can be reimbursed depending on which type of insurance you have.
                </p>
                <p>
                  I also provide written court or progress summaries upon request if
                  needed. For an additional $85 fee.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="margin_top_small">
            <div class="sc_line sc_line_position_center_center sc_line_style_solid"></div>
            <h2 class="sc_services_title sc_item_title home_h2">Areas of Speciality</h2>
            <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
              <div class="column-1_2">
                <ul class="sc_list sc_list_style_iconed">
                  <li
                    class="sc_list_item odd first"
                    v-for="(speciality, index) in specialityList1"
                    :key="`speciality1-${index}`"
                  >
                    <span class="sc_list_icon icon-check71 icon_color2"></span>
                    {{ speciality }}
                  </li>
                </ul>
              </div>
              <div class="column-1_2">
                <ul class="sc_list sc_list_style_iconed">
                  <li
                    class="sc_list_item odd first"
                    v-for="(speciality, index) in specialityList2"
                    :key="`speciality2-${index}`"
                  >
                    <span class="sc_list_icon icon-check71 icon_color2"></span>
                    {{ speciality }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div class="sc_line sc_line_position_center_center sc_line_style_solid"></div>
            <h2 class="sc_services_title sc_item_title home_h2">Insurance and Fees</h2>
            <b>COMMERCIAL INSURANCES ACCEPTED:</b>
            <br />
            <em>
              (Your co-pay is your speciality co-pay. If you are having trouble finding that, feel free to call or e-mail at
              <strong>jillianh@yourselffirst.org</strong> and we will verify your insurance for you!)
            </em>

            <ul class="sc_list sc_list_style_iconed">
              <li class="sc_list_item odd first">
                <span class="sc_list_icon icon-check71 icon_color2"></span>
                Cigna
              </li>
            </ul>

            <blockquote class="sc_quote">
              <p>If you are out of network, I offer a sliding scale (meaning an out of pocket fee that is per session as well as the ability to reimburse through your insurance plan if you have out-of-network coverage). I am no longer in network with UHC /Oxford/UMR/ BCBS but can submit out of network claims so that you can get reimbursed for sessions.</p>
              <em>I have reimbursement forms in my office and can submit promptly weekly for time sensitive purposes.</em>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "Services");
    window.scrollTo(0, 0);
  },
  data() {
    return {
      psychoterapyServices: [
        "Individual Weekly; 2x/Week Therapy; every other week/monthly",
        "Couples/Marital Counseling",
        "Family Therapy",
        "Talk Therapy; TF-CBT; CBT",
        "DBT; MINDFULNESS Techniques",
        "The Gottman method",
        "Crisis Intervention",
        "Jillology Self-Love Techniques"
      ],
      lifeCoachingServices: [
        "Stress Management Coping Skills Plan",
        `Jillology "Level Up" Techniques`,
        "Needs Assessment",
        "Financial Planning",
        "Strategic Business Planing",
        "Life Prioritizing",
        "Work Stress Management",
        "Personal Life Coaching Strategies for the Day to cope with events, etc",
        "Finding your life's purpose"
      ],
      privateServices: [
        "Clinical Court Summaries",
        "Court Consultations",
        "Clinical supervision",
        "For an additional paperwork to be filled out and faxed its a $85 fee."
      ],
      specialityList1: [
        "Anxiety Disorders",
        "Sexual Issues/Sexual Trauma",
        "Trauma/PTSD",
        "Obsessive Thoughts/Behavior",
        "Hypersexual/Impulsive Tendencies",
        "Stress Management",
        "Work Stress Management",
        "Strategic Business Planning",
        "Post partum depression / the pregnancy process"
      ],
      specialityList2: [
        "Suicidal Ideations / self-harm",
        "Depression",
        "Anger Management",
        "Mood Disorders",
        "Sex-Specific Treatment",
        "Addictions (Co-Dependency, AA/NA)",
        "Legal Issues",
        "Entrepreneurial guidance",
        "Infertility"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.columns_wrap {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
