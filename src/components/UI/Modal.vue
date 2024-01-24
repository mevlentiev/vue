<template>
  <div class="modal" v-if="IsShown">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-title"></slot>
          <button type="button"
                  @click="close"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "UiModal",
  mixins: [toggleMixin]
}
</script>



<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Darker overlay for better focus on modal */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensures modal is above other elements */
}

.modal-dialog {
  width: 30%;
  max-width: 600px; /* Max width for larger screens */
  margin: auto; /* Center the modal */
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Shadow for depth */
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px; /* Spacing under header */
  border-bottom: 1px solid #eee; /* Separator */
}

.close {
  font-size: 30px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  border: none;
  background: none;
  transition: color 0.3s ease;
}

.close:hover, .close:focus {
  color: #d9534f; /* Color change on hover and focus for close button */
}

.modal-body {
  padding-top: 15px; /* Spacing above body content */
}
</style>