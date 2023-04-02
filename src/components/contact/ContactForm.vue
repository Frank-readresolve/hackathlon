<script>
export default {
    setup() {
        return {
            addressApi: import.meta.env.VITE_ADDRESS_API_BASE_URL
        }
    },
    data() {
        return {
            query: null,
            addresses: [],
            companySizes: []
        }
    },
    methods: {
        async search() {
            const input = this.query;
            if (input && input.length > 3) {
                const response = await fetch(`${this.addressApi}${input}`);
                if (response.ok) {
                    const data = await response.json();
                    const matchedAddresses = data.features;
                    this.resetAddresses();
                    if (matchedAddresses.length > 0) {
                        matchedAddresses.forEach((address) => {
                            const properties = address.properties;
                            this.addresses.push({ id: properties.id, label: properties.label });
                        });
                    }
                } else {
                    console.error('HTTP error');
                }
            } else {
                this.resetAddresses();
            }
        },
        addressSelected(event) {
            this.query = event.target.innerText;
            this.resetAddresses();
        },
        hideAddresses(event) {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !relatedTarget.classList.contains('address')) {
                this.resetAddresses();
            }
        },
        resetAddresses() {
            this.addresses = [];
        }
    },
    async created() {
        const response = await fetch('/data/company-sizes.json');
        this.companySizes = await response.json();
    }
};
</script>
<template>
    <form class="row g-4" @submit.prevent="">
        <div class="col-12 col-md-5">
            <label for="firstName" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="firstName">
        </div>
        <div class="col-12 col-md-7">
            <label for="lastName" class="form-label">Nom</label>
            <input type="text" class="form-control" id="lastName">
        </div>
        <div class="col-12">
            <label for="email" class="form-label">Email pro</label>
            <div class="input-group">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="email">
            </div>
        </div>
        <div class="col-12 col-md-8">
            <label for="company" class="form-label">Entreprise</label>
            <input type="text" class="form-control" id="company">
        </div>
        <div class="col-12 col-md-4">
            <label for="companySize" class="form-label">Taille</label>
            <select class="form-select" id="companySize">
                <option selected disabled>Sélectionner...</option>
                <option v-for="size in companySizes" :key="size.id" :value="size.id">{{ size.label }}</option>
            </select>
        </div>
        <div class="col-12">
            <label for="address" class="form-label">Adresse</label>
            <input @keyup="search" @blur="hideAddresses" v-model.trim="query" type="search" class="form-control"
                id="address" placeholder="Commencez à taper...">
            <div id="matched-addresses" class="position-relative">
                <ul class="list-group position-absolute w-100 shadow-sm" v-if="addresses.length">
                    <a href="#" v-for="address in addresses" :key="address.id"
                        class="address list-group-item list-group-item-action" @click.prevent="addressSelected">
                        {{ address.label }}
                    </a>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <label for="comment" class="form-label">Vos besoins</label>
            <textarea id="comment" class="form-control" rows="5"></textarea>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end mb-3">
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </div>
    </form>
</template>
