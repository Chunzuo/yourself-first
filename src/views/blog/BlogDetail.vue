<template>
  <div>
    <div class="page_content_wrap page_paddings_yes">
      <div class="content_wrap">
        <div class="content">
          <!-- post-content -->
          <div
            class="itemscope post_item post_item_single post_featured_default post_format_standard post type-post status-publish format-standard has-post-thumbnail hentry category-standard-blog category-without-sidebar tag-my-office tag-presentations"
          >
            <div class="post_featured">
              <div class="post_thumb">
                <a
                  class="hover_icon hover_icon_view"
                  :href="blog.image"
                  :title="blog.title"
                  target="_blank"
                >
                  <img :alt="blog.title" :src="blog.image" />
                </a>
              </div>
            </div>
            <div class="post_content">
              <div class="post_info">
                <span class="post_info_item post_info_posted">
                  <a
                    href="post-standard.html"
                    class="post_info_date date updated"
                    >February 20, 2016</a
                  >
                </span>
                <span class="post_info_item post_info_counters">
                  <a
                    class="post_counters_item post_counters_comments icon-chat"
                    title="Comments - 1"
                    href="#"
                  >
                    <span class="post_counters_number">1</span>
                  </a>
                  <a
                    class="post_counters_item post_counters_likes icon-heart-empty enabled"
                    title="Like"
                    href="#"
                  >
                    <span class="post_counters_number">0</span>
                  </a>
                </span>
              </div>
              <b>{{ blog.title }}</b>
              <p>
                {{ blog.content }}
              </p>
            </div>
            <section class="post_author author vcard">
              <div class="post_author_avatar">
                <a href="#">
                  <img
                    src="https://d1k13df5m14swc.cloudfront.net/photos/Jillian-Holguin-LCSW-MSW-251519-circle_large__v1__.png"
                    class="avatar user-1-avatar avatar-75 photo"
                    alt="Profile photo of Jillian Holguin"
                  />
                </a>
              </div>
              <h6 class="post_author_title">
                By
                <span>
                  <router-link to="/" class="fn">Jillian Holguin</router-link>
                </span>
              </h6>
              <div class="post_author_info">
                My name is Jillian Holguin and I am a Licensed Clinical Social
                Worker practicing in Hudson County, New Jersey specifically
                downtown Jersey city- Exchange Place.
              </div>
            </section>
          </div>
          <!-- post-content -->
        </div>
      </div>

      <!-- Related Posts -->
      <section class="related_wrap">
        <div class="content_wrap">
          <h2 class="section_title">Related Posts</h2>
          <div class="columns_wrap">
            <div
              class="column-1_2 column_padding_bottom"
              v-for="(post, index) in relatedPosts"
              :key="`related-post-${index}`"
            >
              <article class="post_item post_item_related post_item_1">
                <div class="post_content">
                  <div class="post_featured">
                    <div class="post_thumb">
                      <router-link
                        class="hover_icon hover_icon_link"
                        :to="`/blog/${post.index}`"
                      >
                        <img
                          :alt="post.title"
                          :src="post.image"
                          style="max-height: 300px;"
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="post_content_wrap">
                    <h5 class="post_title">
                      <router-link :to="`/blog/${post.index}`">
                        {{ post.title }}
                      </router-link>
                    </h5>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <!-- Related Posts -->

      <!-- Comments -->
      <div class="content_wrap">
        <div class="content">
          <section class="comments_wrap">
            <div id="comments" class="comments_list_wrap">
              <h2 class="section_title comments_list_title">0 Comment</h2>
              <ul class="comments_list">
                <!-- <li
                  id="comment-2"
                  class="comment even thread-even depth-1 comment_item"
                >
                  <div class="comment_author_avatar">
                    <img
                      alt=""
                      src="http://placehold.it/75x75"
                      class="avatar avatar-75 photo"
                    />
                  </div>
                  <div class="comment_content">
                    <div class="comment_info">
                      <span class="comment_author">John Snow</span>
                      <span class="comment_date">
                        <span class="comment_date_label">Posted</span>
                        <span class="comment_date_value">March 7, 2016</span>
                      </span>
                      <span class="comment_time">1:29 pm</span>
                    </div>
                    <div class="comment_text_wrap">
                      <div class="comment_text">
                        <p>
                          Incredible. This Template is just perfect for our
                          website that is dedicated to psychology. Thanks for
                          the awesome product!
                        </p>
                      </div>
                    </div>
                    <div class="comment_reply">
                      <a rel="nofollow" class="comment-reply-link" href="#">
                        Reply
                      </a>
                    </div>
                  </div>
                </li> -->
              </ul>
            </div>
            <div class="comments_form_wrap">
              <h2 class="section_title comments_form_title">Add Comment</h2>
              <div class="comments_form">
                <div id="respond" class="comment-respond">
                  <form
                    action="#"
                    method="post"
                    id="commentform"
                    class="comment-form"
                  >
                    <p class="comments_notes">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div class="comments_field comments_message">
                      <label for="comment" class="required">Your Message</label>
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                        aria-required="true"
                      ></textarea>
                    </div>
                    <div class="comments_field comments_author">
                      <label for="author" class="required">Name</label>
                      <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Name *"
                        value=""
                        size="30"
                        aria-required="true"
                      />
                    </div>
                    <div class="comments_field comments_email">
                      <label for="email" class="required">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email *"
                        value=""
                        size="30"
                        aria-required="true"
                      />
                    </div>

                    <p class="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        id="send_comment"
                        class="submit"
                        value="Post Comment"
                      />
                      <input
                        type="hidden"
                        name="comment_post_ID"
                        value="135"
                        id="comment_post_ID"
                      />
                      <input
                        type="hidden"
                        name="comment_parent"
                        id="comment_parent"
                        value="0"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- /Comments -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    blog() {
      return this.$store.state.blog.list[this.id];
    },
    relatedPosts() {
      let posts = [];
      const blogList = this.$store.state.blog.list;
      for (let i = 0; i < blogList.length; i++) {
        if (posts.length == 2) {
          continue;
        }
        if (i != this.id) {
          let data = blogList[i];
          data["index"] = i;
          posts.push(data);
        }
      }
      return posts;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped></style>
