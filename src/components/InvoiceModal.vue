<template>
    <div @click="checkClick" ref="invoiceWrap" class="invoice-wrap flex flex-column">
        <form @submit.prevent="submitForm" class="invoice-content">
            <h1>New Invoice</h1>

            <!--Bill From section-->
            <div class="bill-from flex flex-column">
                <h4>Bill From</h4>
                <div class="input flex flex-column">
                    <label for="billerStreetAddress">Street Address</label>
                    <input type="text" required id="billerStreetAddress" v-model="billerStreetAddress">
                </div>

                <div class="location-details flex">
                    <div class="input flex flex-column">
                        <label for="billerCity">City</label>
                        <input type="text" required id="billerCity" v-model="billerCity">
                    </div>
                    <div class="input flex flex-column">
                        <label for="billerZipCode">Zip Code</label>
                        <input type="text" required id="billerZipCode" v-model="billerZipCode">
                    </div>
                    <div class="input flex flex-column">
                        <label for="billerCountry">Country</label>
                        <input type="text" required id="billerCountry" v-model="billerCountry">
                    </div>
                </div>
            </div>



<!-- Bill To-->
        </form>
    </div>
</template>

<script>
export default {
    name: "InvoiceModal",
    data() {
        return {
            billerStreetAddress: null,
            billerCity: null,
            billerZipCode: null,
            billerCountry: null,
            clientName: null,
            clientEmail: null,
            clientStreetAddress: null,
            clientCity: null,
            clientZipCode: null,
            clientCountry: null,
            invoiceDateUnix: null,
            invoiceDate: null,
            paymentTerms: null,
            paymentDueDateUnix: null,
            paymentDueDate: null,
            productDescription: null,
            invoicePending: null,
            invoiceDraft: null,
            invoiceItemList: [],
            invoiceTotal: 0,
        }
    },
    methods: {
        checkClick() {

        },
        submitForm() {

        }
    }
}
</script>

<style scoped>

</style>
