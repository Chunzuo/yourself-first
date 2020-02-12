<template>
  <div>
    <div class="page_content_wrap page_paddings_yes">
      <div class="content_wrap">
        <div class="content">
          <div style="text-align: center;">
            <h3 class="sc_title sc_title_regular margin_top_null home_h2">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>
            WHAT SHOULD I BRING WITH ME?
          </strong>
          <ul>
            <li>a copy of your ID</li>
            <li>insurance card</li>
            <li>co-pay listed under speciality</li>
          </ul>
          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>
            COMING TO THERAPY FOR THE FIRST TIME?
          </strong>
          <br />
          <span
            >Upon arrival, you be greeted by the staff and the therapist will be
            notified that you are here for your appointment. Please feel free to
            wait in the lobby area. Your therapist will then greet you and you
            will meet for an initial in-take session that takes roughly about
            45-60 minutes. Upon meeting for the first session, your therapist
            will require you to fill out consent and HIPPA forms consenting to
            treatment in which your therapist will go over these forms with you
            on an Ipad.
          </span>
          <br />
          <span
            >You will then schedule your next appointment and be on your way to
            achieving your best self.</span
          >
          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>HOW DOES THERAPY WORK?</strong>
          <br />
          <span
            >Therapy is like going to the gym but for the best results for
            anything, it takes maintaing and going the required amount of times
            weekly for the best results.</span
          >
          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>HOW DO I KNOW IF I NEED THERAPY</strong>
          <br />
          <span
            >There's a certain stigma to therapy. "I don't need it" or if I do
            there's something wrong with me.</span
          >
          <br />
          <span>ABSOLUTELY NOT.</span>
          <br />
          <span>
            And in 2018, with the stressors the world has to offer, job
            performance more demanding and minimal work/personal life balance,
            can cause a gateway to maladaptive ways of coping.
          </span>
          <br />
          <span>
            Therapy is equivalent to having a personal trainer for your life
            that is a person that is making YOU the priority every week, outside
            of your personal circle.
          </span>
          <br />
          <span
            >TEAM YOU. MAKING YOU and your needs the priority once a week!</span
          >
          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>WHAT IF I DON'T LIKE IT?</strong>
          <br />
          <span
            >Booking a live or a 15 phone consultation will give you more of an
            idea of what to expect and if this therapist is the perfect fit for
            you. It's completely okay to book an appointment, have a first
            appointment and not like it. It's important to find a therapist that
            fits for YOU! You and your needs are the priority. I highly
            encourage trying another therapist. Therapy is very
            beneficial!</span
          >
          <div
            class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
          ></div>
          <strong>ENTERING THE BUILDING</strong>

          <div class="margin_top_tiny" style="display: flex;">
            <img src="@/assets/img/faq_img1.jpeg" alt="" />

            <span class="margin_left_small"
              >For your safety, when you first walk through the lobby, you will
              need to present <b><em>your ID</em></b> to security and let them
              know you have an appointment with
              <b>Jillian Holguin on the 21st floor.</b>
              You will then take a photo for your visitors pass and be directed
              to the south center entrance which will be around the poles on
              your left if you are facing the front desk. Go through the doors
              located in the picture on the left. You will then be directed and
              have access to the elevators that takes you to the 21st floor for
              your scheduled appointment.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "FAQ");
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped></style>
