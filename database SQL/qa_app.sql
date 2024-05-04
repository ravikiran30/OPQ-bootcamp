CREATE DATABASE qa_app;
USE qa_app;
DROP DATABASE qa_app;
CREATE TABLE admin(
	admin_id INT,
    post_medicine_id INT  AUTO_INCREMENT PRIMARY KEY,
    post_bloodtest_id INT );

CREATE TABLE list_of_medicine(
		medicine_id INT AUTO_INCREMENT PRIMARY KEY,
        medicine_name varchar(200),
        details varchar(200),
        MRP INT);
CREATE TABLE list_of_test(
		test_id INT AUTO_INCREMENT PRIMARY KEY,
        test_name varchar(200),
		details varchar(200),
        report_avaliable_on varchar(200),
        MRP INT);
CREATE TABLE patient(
		patient_id INT AUTO_INCREMENT PRIMARY KEY,
        patient_name varchar(200),
        phone_num varchar(10),
        email varchar(200));
DROP TABLE medicine_booked;
CREATE TABLE medicine_booked(
		medicine_book_id INT AUTO_INCREMENT PRIMARY KEY,
        patient_id INT,
        medicine_id INT,
        quantity INT,
        total_price decimal(10,2),
        FOREIGN KEY (patient_id) REFERENCES patient(patient_id));
ALTER TABLE  medicine_booked
ADD FOREIGN KEY ( medicine_id) REFERENCES  list_of_medicine(medicine_id);

CREATE TABLE test_booked(
		test_book_id INT AUTO_INCREMENT PRIMARY KEY,
        patient_id INT,
        test_id INT,
		FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
        FOREIGN KEY (test_id) REFERENCES  list_of_test(test_id));
CREATE TABLE doctor(
		doctor_id INT AUTO_INCREMENT PRIMARY KEY,
        doc_name varchar(100),
        city varchar(100),
        experience INT
       );
DROP table hospital_joined;
CREATE TABLE hospital(
		hospital_id INT AUTO_INCREMENT PRIMARY KEY,
        hospital_name varchar(200),
        city varchar(200));
        
CREATE TABLE qualification(
		qualification_id INT AUTO_INCREMENT PRIMARY KEY,
        doctor_id INT,
        qualification_name varchar(200),
        institute_name varchar(200),
        year_of_completion varchar(200),
        FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id));
CREATE TABLE doc_specialisation(
		doc_spe_id int AUTO_INCREMENT PRIMARY KEY,
        doctor_id INT,
        specialisation_id INT,
        FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
        FOREIGN KEY (specialisation_id) REFERENCES specialisation(specialisation_id));
CREATE TABLE specialisation(
		specialisation_id INT AUTO_INCREMENT PRIMARY KEY,
        specialisation_name varchar(200));
        
CREATE TABLE appointment(
		appointment_id int auto_increment primary key,
        patient_id int,
        doctor_id int,
        appointment_date date,
        FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
        FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id));
CREATE TABLE hospital_joined(
		doc_hos_id INT auto_increment primary key,
        doctor_id int,
        hospital_id int,
        FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
        FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id));
        
CREATE TABLE patient_doctora_appointment(
		patient_id INT,
        doctor_id INT,
        appointment_id INT,
        appointment_date date);
        
select * from list_of_medicine;
INSERT INTO list_of_medicine values(default,"dolo 650", "fever" ,35);
INSERT INTO list_of_medicine values(default,"paracetamol", "fever,headache" ,45);
INSERT INTO list_of_medicine values(default,"thyronorm-50mg", "thyroid" ,110);
INSERT INTO list_of_medicine values(default,"rantac", "acid reflux" ,32);


select * from list_of_test;
-- delete  from patient where patient_id=2;
INSERT INTO list_of_test values(default,"blood sugar","before and after food","12 hours",100);
INSERT INTO list_of_test values(default,"hemoglobin","before or after food","12 hours",200);
INSERT INTO list_of_test values(default,"TSH","before or after food","24 hours",250);


select * from patient;
-- delete from patient where patient_id=3;
insert into patient values(default,"mohan",9812345678,"mohan@gmail.com");
insert into patient values(default,"abhi",8018345678,"abhi@gmail.com");
insert into patient values(default,"kumar",6363345678,"kumar@gmail.com");
insert into patient values(default,"vasu",8800345678,"vasu@gmail.com");
insert into patient values(default,"mani",7891345678,"mani@gmail.com");
insert into patient values(default,"arjun",9036345678,"arjun@gmail.com");
        
select * from medicine_booked;
insert into medicine_booked values(default,1,1,3,105);
insert into medicine_booked values(default,4,3,1,110);
insert into medicine_booked values(default,1,3,1,110);
insert into medicine_booked values(default,3,2,2,90);

select * from test_booked;
insert into test_booked values(default,2,2);
insert into test_booked values(default,4,1);
insert into test_booked values(default,3,3);
insert into test_booked values(default,4,2);
insert into test_booked values(default,1,2);

select * from doctor;
insert into doctor values(default,"kumar","bangalore",2);
insert into doctor values(default,"raju","bangalore",3);
insert into doctor values(default,"shivu","devanahalli",5);
insert into doctor values(default,"suresh","bangalore",8);

select * from specialisation;
insert into specialisation values(default,"mbbs");
insert into specialisation values(default,"dermatologist");
insert into specialisation values(default,"orthopedist");

select * from hospital;
insert into hospital values(default,"ramaiah","bangalore");
insert into hospital values(default,"fortis","bangalore");
insert into hospital values(default,"akash","devanahalli");

select * from doc_specialisation;
insert into doc_specialisation values(default,1,1);
insert into doc_specialisation values(default,4,1);
insert into doc_specialisation values(default,3,2);
insert into doc_specialisation values(default,2,3);

select * from  qualification;
insert into  qualification values(default,1,"mbbs","vydehi",2010);
insert into  qualification values(default,4,"mbbs","kims",2013);
insert into  qualification values(default,3,"md","bmcri",2015);
insert into  qualification values(default,2,"ms","kims",2018);

select * from hospital_joined;
insert into  hospital_joined values(default,1,1);
insert into  hospital_joined values(default,4,2);
insert into  hospital_joined values(default,3,1);
insert into  hospital_joined values(default,3,3);
insert into  hospital_joined values(default,2,2);
insert into  hospital_joined values(default,2,3);

select * from appointment;
-- drop table appointment;
insert into appointment values(default,1,1,"2024-02-01");
insert into appointment values(default,2,3,"2024-02-15");
insert into appointment values(default,5,2,"2024-03-20");
insert into appointment values(default,6,4,"2024-03-01");
insert into appointment values(default,2,2,"2024-02-18");


-- find patient names who have not taken appointments
select patient_id,patient_name
from patient
where patient_id NOT IN (select patient_id from appointment);

-- find patient who have booked medicine,blood test and taken appointment
select distinct p.patient_id,p.patient_name
from patient p
join medicine_booked mb
on p.patient_id=mb.patient_id
join test_booked tb
on mb.patient_id=tb.patient_id
join appointment ap
on tb.patient_id= ap.patient_id;

-- doctor works in more than one hospital
select doctor_id 
from hospital_joined
group by doctor_id
having count(doctor_id)>1;

select patient_id,avg(total_price)
from medicine_booked
group by patient_id;


select d.doctor_id,d.doc_name,h.hospital_id,h.hospital_name
from doctor d
join hospital_joined hj
on d.doctor_id=hj.doctor_id
join hospital h
on hj.hospital_id=h.hospital_id
where doc_hos_id=3;

select *
from patient p
join medicine_booked mb
on p.patient_id=mb.patient_id;

select p.patient_id,p.patient_name,a.appointment_id,d.doctor_id,d.doc_name
from doctor d
join appointment a
on d.doctor_id=a.doctor_id
join patient p
on a.patient_id=p.patient_id
where d.doctor_id=2;




-- SUBQUERIES        ::::::------------

-- questions
-- find medicine detials whose MRP is less than the average of the MRP
select * from list_of_medicine;
select avg(MRP) from list_of_medicine;

select *
from list_of_medicine
where MRP<(select avg(MRP)
			from list_of_medicine);
            
            
            
-- find the appointment details of the doctors where doctors work in more than one hospitals
select * from hospital_joined;
select * from appointment;

select doctor_id from hospital_joined
					group by doctor_id
                    having count(doctor_id)>1;
select *
from appointment 
where doctor_id in(select doctor_id from hospital_joined
					group by doctor_id
                    having count(doctor_id)>1);



-- find the patient names who have not taken appointments
select * from appointment;
select* from patient;

select *
from patient
where patient_id not in (select distinct patient_id
							from appointment);


select distinct patient_id
from appointment;

-- find medicine booked details where total_prices is less than average total price  baased on the patient.
select patient_id,avg(total_price) from medicine_booked group by patient_id;

select *
from medicine_booked mb1
where mb1.total_price > (select avg(mb2.total_price)
							from medicine_booked mb2
                            where mb1.patient_id=mb2.patient_id);



-- find the patient names who have not taken appointments
select * from patient p
where not exists (select 1 from appointment a
					where a.patient_id=p.patient_id);

select 1 from appointment a
where a.patient_id=2;


-- find patients details who had taken appointments with doctor name is suresh
select *
from patient
where patient_id in (select patient_id p
						from appointment a
                        where a.doctor_id in (select doctor_id 
												from doctor d
                                                where doc_name="suresh"));
  select* from doctor;
select * from appointment;
                                                

-- fetch details of the medicine and add remarks to those medicines who has more and less than average of MRP
select *,
(case when MRP>(select avg(MRP) from list_of_medicine)
	then "higher than average"
else "less than average"
end) as remarks
from list_of_medicine
join (select avg(MRP) from list_of_medicine )as avg_mrp;




-- find the patient ids who have made total price is greater than the average of total price
select patient_id, sum(total_price)
from medicine_booked
group by patient_id
having sum(total_price)> (select avg(total_price) from medicine_booked);


-- INSERT 
insert into;
select p.patient_id,d.doctor_id,a.appointment_id,a.appointment_date
from patient p
join appointment a on a.patient_id=p.patient_id
join doctor d on a.doctor_id=d.doctor_id;

-- update 
alter table medicine_booked
add discount_price int;
select * from medicine_booked;

update medicine_booked
set discount_price=total_price-total_price*0.1
where medicine_id in (select medicine_id 
						from list_of_medicine
                        where MRP>40);
                        

-- delete
-- the patient names who have not taken appointments---have taken pid--1,2,5,6 not taken pid-3,4
select * from appointment;

delete from patient p
where p.patient_id in  (select patient_id from patient p
					where not exists (select 1 from appointment a
										where a.patient_id=p.patient_id);













-- single-row subquery
select * 
from list_of_medicine ;
select * 
from list_of_medicine 
where MRP<(select avg(MRP)
			from list_of_medicine);
select lm.* 
from list_of_medicine lm
join (select avg(MRP) avg_mrp from list_of_medicine) as avg_mrp1
on lm.MRP<avg_mrp1.avg_mrp;
 
select avg(MRP)
from list_of_medicine;

select *,
(case when MRP>(select avg(MRP) from list_of_medicine)
	then "higher than average"
else "less than average"
end) as remarks
from list_of_medicine
join (select avg(MRP) from list_of_medicine )as avg_mrp;

-- multiple row subquery
-- select doctor and their appointment details where doctors joined in more than one hospital
select doctor_id 
from hospital_joined
group by doctor_id
having count(doctor_id)>1;
select * from appointment;
select 	*
from appointment 
where doctor_id IN (select doctor_id 
		from hospital_joined
		group by doctor_id
		having count(doctor_id)>1);
        
select patient_id,patient_name
from patient
where patient_id NOT IN (select distinct patient_id from appointment);
select distinct patient_id from appointment; 
select * from patient p
where not exists (select 1 from appointment a 
					where a.patient_id=p.patient_id);
      

-- having 
select patient_id, sum(total_price)
from medicine_booked
group by patient_id
having sum(total_price)> (select avg(total_price) from medicine_booked);
        
--  corelated subquery
select *
from medicine_booked mb1
where mb1.total_price <(select avg(mb2.total_price)
							from medicine_booked mb2
                            where mb1.patient_id=mb2.patient_id);
select avg(mb2.total_price)
from medicine_booked mb2
where mb1.patient_id=mb2.patient_id;

select * from patient p
where not exists (select 1 from appointment a 
					where a.patient_id=p.patient_id);
select * from appointment;

select 1 from appointment a 
					where a.patient_id=1;
-- nested subquery
select p.patient_id,p.patient_name,a.appointment_id,d.doctor_id,d.doc_name
from doctor d
join appointment a
on d.doctor_id=a.doctor_id
join patient p
on a.patient_id=p.patient_id
where d.doctor_id=2;
select *
from patient p
where patient_id in(
	select patient_id p
	from appointment a
	where a.doctor_id in
		(select doctor_id
		from doctor d
		where d.doc_name="suresh" ));
        


-- subquery with insert statement *****
select * from doctor;
select * from qualification;

insert into doctor
select qualification_name from qualification q
where doctor_id=q.doctor_id;

-- update
select * from medicine_booked;
select* from list_of_medicine;

alter table list_of_medicine
add discount_price int;

update list_of_medicine
set discount_price=MRP-MRP*0.1
where MRP>40;
                        
-- delete 
select * from patient;
select * from  appointment;

delete from patient
where patient_id not in (select patient_id 
							from appointment
                            where doctor_id =2);

