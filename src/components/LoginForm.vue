<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <h1 class="text-center">🗄️ W5. Library Registration Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                v-model="formData.username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-sm-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                v-model="formData.gender"
                @blur="validateGender(true)"
                @input="validateGender(false)"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                v-model="formData.password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
            <div class="col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                name="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData['Australian Resident']"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
            </div>
            <div class="col-sm-6"></div>
          </div>
          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
              @blur="validateReason(true)"
              @input="validateReason(false)"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  'Australian Resident': false,
  gender: '',
  reason: '',
})

const emit = defineEmits(['newUser'])
const clearForm = () => {
  formData.value.username = ''
  formData.value.password = ''
  formData.value.confirmPassword = ''
  formData.value['Australian Resident'] = false
  formData.value.reason = ''
  formData.value.gender = ''
}
const submitForm = () => {
  validateName(true)
  validatePassword(true)
  validateGender(true)
  validateReason(true)
  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason
  ) {
    emit('newUser', { ...formData.value })
    clearForm()
  }
}

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  resident: null,
  reason: null,
  gender: null,
})

const validateName = (blur) => {
  if (formData.value.username.length < 3 && blur) {
    errors.value.username = 'username must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (!blur) {
    errors.value.password = null
    return
  }

  if (password.length < minLength) {
    errors.value.password = `password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    errors.value.password = 'password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    errors.value.password = 'password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    errors.value.password = 'password must contain at least one number.'
  } else if (!hasSpecialChar) {
    errors.value.password = 'password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

const validateConfirmPassword = (blur) => {
  if (!blur) {
    errors.value.confirmPassword = null;
    return;
  }

  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match.';
  } else {
    errors.value.confirmPassword = null;
  }
}

const validateGender = (blur) => {
  const gender = formData.value.gender
  if (!gender && blur) {
    errors.value.gender = 'Please select a gender.'
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  const reason = formData.value.reason
  const minLength = 5
  if (!blur) {
    errors.value.reason = null
  } else if (!reason || reason.length < minLength) {
    errors.value.reason = `reason must be at least ${minLength} characters long.`
  }
}
</script>

<style scoped></style>
