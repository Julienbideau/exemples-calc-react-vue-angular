export default {
  name: 'calc',
  components: {}, 
  props: [],
  data () {
    return {
		formula: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
  clickDelete() {
    this.formula = '0';
  },

  clickSign(e) {
    const previousResult =eval(this.formula);
    const sign = e;
    const result = sign !== "=" ? previousResult + e : previousResult;
    this.formula =result;
  
  },

  clickNumber(e) {
    const result = this.formula + e;
    this.formula=  result;
  
  }
  }
}
