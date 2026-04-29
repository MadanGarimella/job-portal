package com.jobportal.service;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + id));
    }

    public void deleteJob(Long id) {
        if (!jobRepository.existsById(id)) {
            throw new RuntimeException("Job not found with id: " + id);
        }
        jobRepository.deleteById(id);
    }

    public Job updateJob(Long id, Job updatedJob) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + id));

        // ✅ Update only if not null (better practice)
        if (updatedJob.getTitle() != null)
            job.setTitle(updatedJob.getTitle());
        if (updatedJob.getCompany() != null)
            job.setCompany(updatedJob.getCompany());
        if (updatedJob.getLocation() != null)
            job.setLocation(updatedJob.getLocation());
        if (updatedJob.getType() != null)
            job.setType(updatedJob.getType());
        if (updatedJob.getDescription() != null)
            job.setDescription(updatedJob.getDescription());
        if (updatedJob.getSalary() != null)
            job.setSalary(updatedJob.getSalary());

        return jobRepository.save(job);
    }
}