import { motion } from 'framer-motion';
function Card(){
    return(
        <div className="row cardRow">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="col-md-6 col-sm-12 col-lg-3">
                <div className="boxSm">
                    <div className="boxSm__info">
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="user" data-lucide="user" class="lucide lucide-user report-box__icon text-success"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div className="dato">246</div>
                        <div className="dataDescription">
                            Patients
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.1,duration: 0.5 }} className="col-md-6 col-sm-12 col-lg-3">
                <div className="boxSm">
                    <div className="boxSm__info">
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="monitor" data-lucide="monitor" class="lucide lucide-monitor report-box__icon text-warning"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="dato">86</div>
                        <div className="dataDescription">
                            Covid
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.2,duration: 0.5 }} className="col-md-6 col-sm-12 col-lg-3">
                <div className="boxSm">
                    <div className="boxSm__info">
                        <div className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="user" data-lucide="user" class="lucide lucide-user report-box__icon text-success"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div className="dato">43</div>
                        <div className="dataDescription">
                            healed
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.3,duration: 0.5 }} className="col-md-6 col-sm-12 col-lg-3">
                <div className="boxSm">
                    <div className="boxSm__info">
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="monitor" data-lucide="monitor" class="lucide lucide-monitor report-box__icon text-warning"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="dato">65</div>
                        <div className="dataDescription">
                            deceased
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
    
}

export default Card;