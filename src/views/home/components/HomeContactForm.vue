<template>
  <div>
    <!-- Contact Form -->
    <div class="contact_bg">
      <div class="content_wrap">
        <div class="column-5_7">
          <div class="align_left content_wrap">
            <div
              class="columns_wrap sc_columns columns_nofluid sc_columns_count_12 col468_100p"
            >
              <h1
                class="h1_home sc_title sc_title_regular sc_align_left margin_top_huge margin_bottom_null"
              >
                Book An Appointment Now!
              </h1>
              <div class="vc_custom_heading ls1px new1">
                MAKE A BOOKING WITH OUR ONLINE FORM
              </div>
              <div class="sc_form_wrap scheme_dark">
                <div
                  class="sc_form sc_form_style_form_2 aligncenter margin_top_small margin_bottom_huge"
                >
                  <form data-formtype="form_2" class="contact_form_home">
                    <div class="sc_form_info">
                      <div
                        class="sc_infobox sc_infobox_style_success sc_infobox_iconed icon-check71"
                        v-if="sendStatus == 1"
                      >
                        <div class="text_column content_element ">
                          <div class="wrapper">
                            <p>Thank you! I will get in contact shortly.</p>
                          </div>
                        </div>
                      </div>
                      <div
                        id="bac_img"
                        class="sc_infobox sc_infobox_style_error sc_infobox_iconed icon-attention"
                        v-if="sendStatus == 2"
                      >
                        <div class="text_columncontent_element ">
                          <div class="wrapper">
                            <p>Please check the following error(s):</p>
                            <p
                              v-for="(error, index) in errors"
                              :key="`error - ${index}`"
                            >
                              {{ error }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="columns_wrap sc_columns columns_nofluid sc_columns_count_2"
                      >
                        <div
                          class="column-1_2 sc_column_item sc_column_item_1 odd first"
                        >
                          <div class="sc_form_item sc_form_field label_over">
                            <input
                              type="text"
                              placeholder="Name *"
                              v-model="data.name"
                            />
                          </div>
                        </div>
                        <div
                          class="column-1_2 sc_column_item sc_column_item_2 even last"
                        >
                          <div class="sc_form_item sc_form_field label_over">
                            <input
                              type="text"
                              placeholder="Email *"
                              v-model="data.email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sc_form_item sc_form_field label_over">
                      <input
                        type="text"
                        placeholder="Subject *"
                        v-model="data.subject"
                      />
                    </div>

                    <div class="sc_form_item sc_form_message label_over">
                      <textarea
                        name="message"
                        placeholder="What would you be coming in for?"
                        v-model="data.msg1"
                      ></textarea>
                    </div>

                    <div class="sc_form_item sc_form_message label_over">
                      <textarea
                        name="message"
                        placeholder="What type of insurance do you have?"
                        v-model="data.msg2"
                      ></textarea>
                    </div>

                    <div class="sc_form_item sc_form_message label_over">
                      <textarea
                        name="message"
                        placeholder="How long have these symptoms been occuring for?"
                        v-model="data.msg3"
                      ></textarea>
                    </div>

                    <div class="sc_form_item sc_form_message label_over">
                      <textarea
                        name="message"
                        placeholder="What are you looking for in a therapist?"
                        v-model="data.msg4"
                      ></textarea>
                    </div>

                    <div class="sc_form_item sc_form_message label_over">
                      <textarea
                        name="message"
                        placeholder="How can I be of help?"
                        v-model="data.msg5"
                      ></textarea>
                    </div>

                    <div class="sc_form_item sc_form_button">
                      <button @click.prevent="sendMessage">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ Contact Form -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "",
        email: "",
        subject: "",
        msg1: "", // What would you be coming in for?
        msg2: "", // What type of insurance do you have?
        msg3: "", // How long have these symptoms been occuring for?
        msg4: "", //What are you looking for a therapist?
        msg5: "" //How can I be of help?
      },
      sendStatus: 0, // 0: before send, 1: success, 2: fail
      errors: []
    };
  },
  methods: {
    sendMessage() {
      this.errors = [];
      if (this.data.name == "") {
        this.errors.push("*Name is required");
      }
      if (this.data.email == "") {
        this.errors.push("*Email is required");
      }
      if (this.data.subject == "") {
        this.errors.push("*Subject is required");
      }
      if (this.errors.length > 0) {
        this.sendStatus = 2;
        return;
      }
      this.sendStatus = 1;
    }
  }
};
</script>

<style lang="css" scoped>
.contact_bg {
  background-image: url("../../../assets/img/bg_book_appointment.jpg");
}
</style>
