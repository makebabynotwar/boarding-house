<<template>
    <div class="delete_modal">
        <h4>Are you sure you want to delete?</h4>
        <div class="flex_box">
            <button class="btn" @click="$emit('close')">Cancel</button>
            <button class="btn" >Delete</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>